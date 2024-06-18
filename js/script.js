// Copyright (c) 2024 Giordan Zeina All rights reserved
//
// Created by: Giordan Zeina
// Created on: Jun 2024
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {
  // input
  const params = new URLSearchParams(document.location.search)
  const number = params.get('number') || 0
  let answer = 0

  // process
  for (let counter = 0; counter <= number; counter++) {
    answer += counter
  }

  document.getElementById('answer').innerHTML = "The sum of all the numbers from 0 to " + number + " is: " + answer
}