const express = require("express");
const NewsletterController = require("../controllers/newsletter");
const md_auth = require("../middlewares/authenticated");

const api = express.Router();

api.post("/suscribe-newsletter/:email", NewsletterController.suscribeEmail);
api.get(
  "/get-newsletter/:email",
  [md_auth.ensureAuth],
  NewsletterController.suscribeEmail
);

module.exports = api;
