# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html). At least trying.

Types of changes:

-   **Added** for new features.
-   **Changed** for changes in existing functionality.
-   **Deprecated** for soon-to-be removed features.
-   **Removed** for now removed features.
-   **Fixed** for any bug fixes.
-   **Security** in case of vulnerabilities.

## [Unreleased]

## [1.18.0] - 2022-03-25

### Added

-   Fetch timeout.

## [1.17.0] - 2021-12-21

### Changed

-   Select component inner updates. Select with `simple` prop will use useSelect logic, which provide better UX and aria. It will work as native select. Select with `simple=false` will use useCombobox logic, which allows filter menu list items.

## [1.16.0] - 2021-12-21

### Changed

-   GDS version update;

### Added

-   Current user method integration;
-   Clear react-query cache when log out;

### Fixed

-   Fixed `Form` typescript support;
-   Fix `Select` with `simple` prop tabulation and accessability.

## [1.15.0] - 2021-12-16

### Fixed

-   `order/settings` requests fixes

### Changed

-   `react-query` version updated

## [1.14.0] - 2021-12-14

### Changed

-   `refunds/list` page improvments

### Added

-   `refunds/[id]` page added

## [1.13.0] - 2021-12-10

### Changed

-   `Dropzone` refactoring.

## [1.12.0] - 2021-12-07

### Added

-   Files tab in order detail page.

### Changed

-   `Dropzone` component improvemnt.

## [1.11.0] - 2021-12-06

### Added

-   `orders/settings` page

## [1.10.0] - 2021-12-03

### Changed

-   `useURLHelper` hook renamed to `useFiltersHelper`;
-   `useFiltersHelper` hook now returns `filtersActive` flag;

### Added

-   `orders/refunds` page;
-   `orders/refunds/settings` page;
-   `orders/list/[id]/create-refund` page.

## [1.9.0] - 2021-12-01

### Changed

-   Orders detail page fully changed

## [1.8.0] - 2021-11-26

### Fixed

-   Filter in `orders/list`

### Changed

-   Logic for auto generated table and filters diveded on different files, so you can reuse it anywhere

## [1.7.0] - 2021-11-25

### Changed

-   Sidebar refactoring; Now sidebar can show active points by user;
-   Add Sidebar adaptive logic;
-   Add Header adaptive logic.

## [1.6.0] - 2021-11-22

### Changed

-   Updated storybook verison;
-   Updated storybook-addon-next-router;
-   Changed ui-logic of CalendarInputRange.

## [1.5.0] - 2021-11-19

### Changed

-   Move pages logic in `views` folder. There are only 'link-files' in pages directory. Now you can place different files and components near with page in `views`
-   Update Next js to 12 version

## [1.4.0] - 2021-11-17

### Added

-   `AutocompleteMulti` component;

### Changed

-   `Autocomplete` component. It implements react-query logic;
-   `orders/list` filter improvments.

## [1.3.0] - 2021-11-15

### Changed

-   OMS list page;
-   Table component logic + allow sort columns + save user selected settings;
-   `CalendarInputRange` refactoring.

## [1.2.0] - 2021-11-12

### Added

-   Added payment methods for `logistic/delivery-services`.

## [1.1.0] - 2021-11-08

### Removed

-   Remove `AppWrapper` component;

### Changed

-   Update `Header` ui;
-   Extend `Form` component so it can accept function with FormikProps as a child;
-   Update `Sidebar` styles;
-   Update `Popup` ui, added leftHand popup;
-   Update `Modal` props. Added children prop.

## [1.0.0] - 2021-11-02

### Added

-   New table (just `<Table />`) component with new UX logic;
-   Ensi meta tag and header for wappalyzer;
-   Add GDS storybook support.

### Changed

-   Previous table component was renamed to `OldTable`;
-   `Tabs` component was styled;
-   `MultiSelect` component now works on `downshift`;
-   Changed stories hierarchy.

### Deprecated

-   OldTable component, use Table instead;
-   DropdownButton component deprecated, use Tooltip instead;
-   FileInput, FilePond components deprecaded, use Dropzone instead.

### Removed

-   React-select plugin with `MultiSelect` component was removed.

### Fixed

-   Checkbox component now can accept `checked` prop. So it can be controlled outside;
-   Fixed unworking stories with `Popup` component.
