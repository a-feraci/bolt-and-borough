"use strict";

const serviceArea = new Map([
  ["21224", "Baltimore"],
  ["21229", "Baltimore"],
  ["21230", "Baltimore"],
  ["21226", "Curtis Bay"],
  ["21075", "Elkridge"],
  ["21227", "Halethorpe"],
  ["21090", "Linthicum Heights"]
]);

const prices = {
  oil: "$79–$109",
  battery: "$159–$259",
  diagnostic: "$95–$125",
  maintenance: "$89–$139"
};

const coverage = document.querySelector("#coverage");
const zip = document.querySelector("#zip");
const coverageResult = document.querySelector("#coverage-result");
const appointment = document.querySelector("#appointment");
const service = document.querySelector("#service");
const estimate = document.querySelector("#estimate");
const review = document.querySelector("#review");
const done = document.querySelector("#done");
const fleet = document.querySelector("#fleet-form");
const fleetResult = document.querySelector("#fleet-result");
let checkedZip = "";

coverage.hidden = false;
fleet.hidden = false;

function updateEstimate() {
  estimate.textContent = service.value ? `Sample estimate: ${prices[service.value]}` : "";
}

function clearCoverage() {
  checkedZip = "";
  coverageResult.textContent = "";
  delete coverageResult.dataset.state;
  appointment.hidden = true;
  review.hidden = true;
  done.hidden = true;
}

zip.addEventListener("input", clearCoverage);

coverage.addEventListener("submit", (event) => {
  event.preventDefault();
  clearCoverage();
  const area = serviceArea.get(zip.value);
  if (!area) {
    coverageResult.dataset.state = "error";
    coverageResult.textContent = "That ZIP is outside the sample service area. Try 21230 or 21075.";
    return;
  }
  checkedZip = zip.value;
  coverageResult.textContent = `${area} (${checkedZip}) is in the sample service area.`;
  appointment.hidden = false;
  updateEstimate();
});

service.addEventListener("change", updateEstimate);
document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    if (!done.hidden) {
      done.hidden = true;
      appointment.hidden = !checkedZip;
    }
    service.value = link.dataset.service;
    updateEstimate();
    if (!review.hidden) {
      review.hidden = true;
      appointment.hidden = false;
    }
    (checkedZip ? service : zip).focus({ preventScroll: true });
  });
});

appointment.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!checkedZip || zip.value !== checkedZip) return;

  const fields = [
    ["Service area", `${serviceArea.get(checkedZip)} (${checkedZip})`],
    ["Service", service.selectedOptions[0].textContent],
    ["Estimate", prices[service.value]],
    ["Vehicle", ["year", "make", "model"].map((id) => document.getElementById(id).value.trim()).join(" ")],
    ["Preferred window", document.querySelector("#window").value]
  ];
  const details = document.querySelector("#request-details");
  details.replaceChildren();
  for (const [label, value] of fields) {
    const row = document.createElement("div");
    const term = document.createElement("dt");
    const description = document.createElement("dd");
    term.textContent = label;
    description.textContent = value;
    row.append(term, description);
    details.append(row);
  }
  appointment.hidden = true;
  review.hidden = false;
  document.querySelector("#review-heading").focus();
});

document.querySelector("#edit").addEventListener("click", () => {
  review.hidden = true;
  appointment.hidden = false;
  service.focus();
});

document.querySelector("#confirm").addEventListener("click", () => {
  review.hidden = true;
  done.hidden = false;
  document.querySelector("#done-heading").focus();
});

document.querySelector("#restart").addEventListener("click", () => {
  appointment.reset();
  coverage.reset();
  clearCoverage();
  zip.focus();
});

fleet.addEventListener("change", () => { fleetResult.textContent = ""; });
fleet.addEventListener("submit", (event) => {
  event.preventDefault();
  const size = document.querySelector("#size").value;
  const need = document.querySelector("#need").value;
  fleetResult.textContent = `Demo inquiry: ${size} · ${need}. No inquiry was sent.`;
});
