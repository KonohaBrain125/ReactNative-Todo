import { styled } from 'nativewind';
import * as React from 'react';
import type { FieldError } from 'react-hook-form';
import type { TextInput, TextInputProps } from 'react-native';
import { TextInput as NTextInput } from 'react-native';

import { Text, View } from './core';
import colors from './theme/colors';

// types

const STextInput = styled(NTextInput);

export interface NInputProps extends TextInputProps {
  label?: string;
  disabled?: boolean;
  error?: Omit<FieldError, 'type'> | undefined;
}

export const Input = React.forwardRef<TextInput, NInputProps>((props, ref) => {
  const { label, error, ...inputProps } = props;

  const [isFocussed, setIsFocussed] = React.useState(false);
  const onBlur = React.useCallback(() => setIsFocussed(false), []);
  const onFocus = React.useCallback(() => setIsFocussed(true), []);

  const borderColor = error
    ? 'border-danger-600'
    : isFocussed
    ? 'border-neutral-600'
    : 'border-neutral-400';

  const bgColor = error ? 'bg-danger-50' : 'bg-neutral-200';
  return (
    <View className="mb-4">
      {label && (
        <Text variant="md" className={error ? 'text-danger-600' : 'text-black'}>
          {label}
        </Text>
      )}
      <STextInput
        ref={ref}
        placeholderTextColor={colors.neutral[400]}
        className={`mt-0 border-[1px] py-4 px-2  ${borderColor} rounded-md ${bgColor} text-[16px]`}
        onBlur={onBlur}
        onFocus={onFocus}
        {...inputProps}
      />
      {error && <Text variant="error">{error.message}</Text>}
    </View>
  );
});
