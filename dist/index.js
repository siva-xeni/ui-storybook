// stories/Button.tsx
import { jsxs } from "react/jsx-runtime";
var Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      className: ["storybook-button", `storybook-button--${size}`, mode].join(" "),
      style: { backgroundColor },
      ...props,
      children: [
        label,
        label
      ]
    }
  );
};

// stories/Header.tsx
import { Fragment, jsx, jsxs as jsxs2 } from "react/jsx-runtime";
var Header = ({ user, onLogin, onLogout, onCreateAccount }) => /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsxs2("div", { className: "storybook-header", children: [
  /* @__PURE__ */ jsxs2("div", { children: [
    /* @__PURE__ */ jsx("svg", { width: "32", height: "32", viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxs2("g", { fill: "none", fillRule: "evenodd", children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",
          fill: "#FFF"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",
          fill: "#555AB9"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",
          fill: "#91BAF8"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("h1", { children: "Acme" })
  ] }),
  /* @__PURE__ */ jsx("div", { children: user ? /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsxs2("span", { className: "welcome", children: [
      "Welcome, ",
      /* @__PURE__ */ jsx("b", { children: user.name }),
      "!"
    ] }),
    /* @__PURE__ */ jsx(Button, { size: "small", onClick: onLogout, label: "Log out" })
  ] }) : /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx(Button, { size: "small", onClick: onLogin, label: "Log in" }),
    /* @__PURE__ */ jsx(Button, { primary: true, size: "small", onClick: onCreateAccount, label: "Sign up" })
  ] }) })
] }) });
export {
  Button,
  Header
};
