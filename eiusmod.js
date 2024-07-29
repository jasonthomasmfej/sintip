function viewSource(source, sourceHeader, sourceFooter, mode) {
  let html = sourceHeader;
  html += "<pre>";
  if (mode === "highlight") {
    html += "<code>";
  }
  html += source;
  if (mode === "highlight") {
    html += "</code>";
  }
  html += "</pre>";
  html += sourceFooter;
  return html;
}
