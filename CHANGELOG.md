# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## 📦 2.1.0 - 2018/09/16

*General support for Bootstrap 4.1.3.*
* **Changed:** Custom controls, fixed misalignments.
* **Changed:** Form controls misalignments and height adjustments. 
* **Added:** Support for `.text-body` and `.text-monospace` utils.

## 📦 2.0.3 - 2018/05/03

### Added
- Support for [noUiSlider 11.1.0](https://github.com/leongersen/noUiSlider#1110-2018-04-02).

### Changed
- Fixed `$popover-arrow-width` interpolation issue [(#32)](https://github.com/DesignRevision/shards-ui/issues/32).
- Fixed demo page responsive display issues. [(#29)](https://github.com/DesignRevision/shards-ui/issues/29).
- Updated dependencies.


## 📦 2.0.2 - 2018/03/28

### Added
- Added `.input-group-middle` input group add-on.
- Added `.custom-toggle-sm` class modifier.
- Added `.list-group-sm` class modifier.

### Changed
- Added small toggle size variation to demo page
- Adjusted small addon variable (sm resulted in padding larger than default).
- Updated the demo page with new `.input-group-middle` add-on.

## 📦 2.0.1 - 2018-02-19

### Added
- Small dropdown menu modifier class.
- Small card modifier.

### Changed
- BS4 dependency import path.
- Fixed the package entrypoint path so Shards' JavaScript package could be imported as a module.
- Input group append/prepend z-index issue.

## 📦 2.0.0 - 2018-02-08

- Skipped minor version due to changes that break backward compatibility.

### Changed
- Upgraded compatibility with Bootstrap 4 final.
- Improved outlined buttons active state styles.
- Improved form label sizing.
- Improved default select element styles.
- Improved toggle elements focused state styles.
- Fixed indeterminate checkbox styles.
- Fixed multiple IE11 app promo extra page layout issues [(#11)](https://github.com/DesignRevision/shards-ui/issues/11)

### Added
- Extended support for customisation options via variables.

### Removed
- Removed redundant margin adjustments on paragraphs following headings.
- Removed unused SCSS variables.

## 📦 1.1.2 - 2017-12-04

### Changed
- Fixed custom toggle issues [(#8)](https://github.com/DesignRevision/shards-ui/issues/8) and [(#9)](https://github.com/DesignRevision/shards-ui/issues/9).
- Fixed demo page elements issues [(#10)](https://github.com/DesignRevision/shards-ui/issues/10).
- Corrected first field "type" in the bottom form of the demo agency landing page.


## 📦 1.1.0 - 2017-11-10

### Added
- Demo example page as extra.

### Changed
- Updated license to MIT.


## [1.0.0] - 2017-11-07
- Initial release.
