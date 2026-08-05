import { StylesConfig } from 'react-select';

/**
 * Shared react-select dark-mode-safe styles.
 *
 * IMPORTANT: All color values are passed as parameters — NEVER call
 * useColorModeValue or any React hook inside these style callbacks,
 * because react-select invokes them outside React's render cycle.
 */
export function getSelectStyles(colors: {
  bgColor: string;
  borderColor: string;
  textColor: string;
  placeholderColor: string;
  mutedIconColor: string;
  separatorColor: string;
  optionFocusedBg: string;
  optionDefaultBg: string;
  multiValueBg: string;
  multiValueLabelColor: string;
  multiValueRemoveColor: string;
  multiValueRemoveHoverBg: string;
  borderRadius?: string;
}): StylesConfig<any, boolean> {
  return {
    control: (base) => ({
      ...base,
      background: colors.bgColor,
      borderColor: colors.borderColor,
      borderRadius: colors.borderRadius ?? 'md',
      transition: 'all 0.2s ease',
      color: colors.textColor,
    }),
    menu: (base) => ({
      ...base,
      background: colors.bgColor,
      borderRadius: colors.borderRadius ?? 'md',
      zIndex: 2,
      color: colors.textColor,
      padding: 4,
    }),
    menuList: (base) => ({
      ...base,
      background: colors.bgColor,
      color: colors.textColor,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? colors.optionFocusedBg : colors.optionDefaultBg,
      color: colors.textColor,
      borderRadius: 'lg',
      cursor: 'pointer',
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: colors.multiValueBg,
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: colors.multiValueLabelColor,
      backgroundColor: 'transparent',
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: colors.multiValueRemoveColor,
      '&:hover': {
        backgroundColor: colors.multiValueRemoveHoverBg,
        color: '#fff',
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: colors.placeholderColor,
    }),
    input: (base) => ({
      ...base,
      color: colors.textColor,
    }),
    singleValue: (base) => ({
      ...base,
      color: colors.textColor,
    }),
    indicatorSeparator: (base) => ({
      ...base,
      backgroundColor: colors.separatorColor,
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: colors.mutedIconColor,
      '&:hover': {
        color: colors.textColor,
      },
    }),
    clearIndicator: (base) => ({
      ...base,
      color: colors.mutedIconColor,
      '&:hover': {
        color: colors.textColor,
      },
    }),
    groupHeading: (base) => ({
      ...base,
      color: colors.mutedIconColor,
      backgroundColor: colors.bgColor,
    }),
    loadingIndicator: (base) => ({
      ...base,
      color: colors.mutedIconColor,
    }),
    loadingMessage: (base) => ({
      ...base,
      color: colors.textColor,
      backgroundColor: colors.bgColor,
    }),
    noOptionsMessage: (base) => ({
      ...base,
      color: colors.placeholderColor,
      backgroundColor: colors.bgColor,
    }),
  };
}
