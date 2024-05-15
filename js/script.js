// Copyright (c) 2024 Giordan Zeina All rights reserved
//
// Created by: Giordan Zeina
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-5-07/sw.js", {
    scope: "/ICD2O-5-07/",
  })
}

/**
 * This function displays an alert.
 */

function myButtonClicked() {
  // input
  const number = parseInt(document.getElementById('number').value)
  let answer = 0

  // process
  for (let counter = 0; counter <= number; counter++) {
    answer += counter
  }
  document.getElementById('answer').innerHTML = "The sum of all the numbers from 0 to " + number + " is: " + answer
}
