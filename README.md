SlackAWS
===

A quick-and-dirty attempt at containers-as-functions in Microsoft Azure to leverage consumption economics in a containerized ecosystem.

Build
---

This repository is synced with Docker Hub and merges to `Dev` or `Master` automatically build and publish to tags `dev` and `latest` respectively. POST webhooks trigger updates to Azure Functions via the API.

App
---

This is a Node.JS app using `express` and `pug`.