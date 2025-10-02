"use strict";
// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:40571932803793879753 LICENSE.md

// Sudra Deva test file

const {expect} = require('chai')
const SudraDeva = require('./index.js');

describe(indra.me.name, () => {
  beforeEach(() => {
    return SudraDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(SudraDeva).to.be.an('object');
    expect(SudraDeva).to.have.property('agent');
    expect(SudraDeva).to.have.property('vars');
    expect(SudraDeva).to.have.property('listeners');
    expect(SudraDeva).to.have.property('methods');
    expect(SudraDeva).to.have.property('modules');
  });
})
