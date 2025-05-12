import './bootstrap';
import {browserSupportsWebAuthn, startRegistration, startAuthentication, } from "@simplewebauthn/browser";

window.startRegistration = startRegistration;
window.browserSupportsWebAuthn = browserSupportsWebAuthn;
window.startAuthentication = startAuthentication;;
