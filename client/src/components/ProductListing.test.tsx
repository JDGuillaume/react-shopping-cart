/**
    * @jest-environment jsdom
*/

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductListing from './ProductListing'