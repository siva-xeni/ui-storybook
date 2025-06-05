"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stories/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  Header: () => Header
});
module.exports = __toCommonJS(index_exports);

// stories/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      type: "button",
      className: ["storybook-button", `storybook-button--${size}`, mode].join(" "),
      style: { backgroundColor },
      ...props,
      children: label
    }
  );
};

// stories/Header.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Header = ({ user, onLogin, onLogout, onCreateAccount }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "storybook-header", children: [
  /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { width: "32", height: "32", viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { fill: "none", fillRule: "evenodd", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "path",
        {
          d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",
          fill: "#FFF"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "path",
        {
          d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",
          fill: "#555AB9"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "path",
        {
          d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",
          fill: "#91BAF8"
        }
      )
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { children: "Acme" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: user ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "welcome", children: [
      "Welcome, ",
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("b", { children: user.name }),
      "!"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { size: "small", onClick: onLogout, label: "Log out" })
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { size: "small", onClick: onLogin, label: "Log in" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { primary: true, size: "small", onClick: onCreateAccount, label: "Sign up" })
  ] }) })
] }) });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Header
});
