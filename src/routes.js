import { META } from './config';
import Login from './containers/Login';
import OutletList from './containers/OutletList';
import MenuItems from './containers/MenuItems';
import OrderSummary from './containers/OrderSummary';
import Home from './App';

/**
 * Generate an object with all necessary fields to render a page.
 * @param {string} path - The page path
 * @param {string} title - THe page title (for SEO)
 * @param {Function} component - The component to be rendered. Containers can also be used
 * @param {string} description - The page description (for SEO) [OPTIONAL]
 * @param {string} keywords - The comma separated page keywords (for SEO) [OPTIONAL]
 * @returns {object}
 */
const createPage = (path, title, component, description, keywords) => ({
  path,
  title: `${title} | ${META.PAGE_TITLE_SUFFIX}`,
  description: description || META.PAGE_DESCRIPTION,
  keywords: keywords || META.PAGE_KEYWORDS,
  component
});

export default [
  createPage('/', 'Home', Home),
  createPage('/login', 'Login', Login),
  createPage('/outletlist','Outlet', OutletList),
  createPage('/MenuItems','MenuItems', MenuItems),
  createPage('/OrderSummary','OrderSummary',OrderSummary),
];