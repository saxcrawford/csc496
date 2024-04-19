const React = require('react');
const { graphql, Link, useStaticQuery } = jest.requireActual('gatsby');

const mockLink = ({ to, ...rest }) => <a href={to} {...rest} />;
const mockSlice = ({ alias, ...rest }) => <div data-test-slice-alias={alias} {...rest} />;

module.exports = {
  ...jest.requireActual('gatsby'),
  graphql: jest.fn(),
  Link: jest.fn(mockLink),
  Slice: jest.fn(mockSlice),
  useStaticQuery: jest.fn(),
};