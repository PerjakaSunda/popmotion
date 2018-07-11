# Changelog

Style Value Types adheres to [Semantic Versioning](http://semver.org/).

## [3.0.3] 2018-06-28

### Fixed

- Fixing error in `tsconfig.json` that leaves code untranspiled.

## [3.0.2] 2018-06-27

### Fixed

- Improving color regex to pick 6-letter hex codes first.

## [3.0.1] 2018-06-27

### Fixed

- Fixing template algo.

## [3.0.0] 2018-06-22

### Removed

- Removed new `combo` in favour of a single unified `complex` value type that can handle mixed number and color strings.

## [2.0.1] 2018-06-21

### Fixed

- Now finding colors containing spaces within combo values.

## [2.0.0] 2018-06-20

### Added

- New units: `vh`, `vw`
- New space-delimited combo type
- Strengthened unit type tests
- Color types can accept already-parsed numbers