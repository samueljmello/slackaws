SlackAWS
===

A quick-and-dirty attempt at containers-as-functions in Microsoft Azure

Build
---

This repository is synced with Docker Hub and merges to `Dev` or `Master` automatically build and publish to tags `dev` and `latest` respectively. POST webhooks trigger updates to Azure Functions via the Azure API.