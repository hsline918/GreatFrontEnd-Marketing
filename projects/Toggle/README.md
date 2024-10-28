# Component API

## Toggle

A simple toggle component that supports different sizes and states.

## Props

| Prop     | Default | Type           | Description                     |
| -------- | ------- | -------------- | ------------------------------- |
| checked  | false   | `Boolean`      | Whether the toggle is checked.  |
| disabled | false   | `Boolean`      | Whether the toggle is disabled. |
| size     | "md"    | `"sm" \| "md"` | The size of the toggle.         |

## Size Specifications

```javascript
sm: {
  wrapper: "w-9 h-5",     // width: 36px, height: 20px
  circle: "w-4 h-4"       // width: 16px, height: 16px
}
md: {
  wrapper: "w-11 h-6",    // width: 44px, height: 24px
  circle: "w-5 h-5"       // width: 20px, height: 20px
}
```

## States

- `disabled`: Light gray background (`bg-gray-100`)
- `active`: Indigo background with hover and focus states
- `inactive`: Gray background with hover and focus states

## Usage Example

```jsx
import { Toggle } from '@your/ui-lib'

// Basic usage
<Toggle />

// Pre-checked
<Toggle checked={true} />

// Small size
<Toggle size="sm" />

// Disabled state
<Toggle disabled />
```

## Accessibility

- Uses native `checkbox` input for accessibility
- Supports keyboard navigation
- Includes focus states
- Uses `sr-only` for screen reader support

P.S. by Claude AI, given headless ui component API as format.
