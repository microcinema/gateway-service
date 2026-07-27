import {
	type ValidationArguments,
	ValidatorConstraint,
	type ValidatorConstraintInterface
} from 'class-validator'

import { SendOtpRequest } from '../../modules/auth/dto'

@ValidatorConstraint({ name: 'IdentifierValidator', async: false })
export class IdentifierValidator implements ValidatorConstraintInterface {
	public validate(value: string, args: ValidationArguments): boolean {
		const object = args.object as SendOtpRequest

		if (object.type === 'email') {
			return (
				typeof value === 'string' &&
				/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
			)
		} else if (object.type === 'phone') {
			return (
				typeof value === 'string' &&
				/^(\+375|80)\s?\(?(29|33|44|25|17)\)?\s?\d{3}[- ]?\d{2}[- ]?\d{2}$/.test(
					value
				)
			)
		}

		return false
	}

	public defaultMessage(args: ValidationArguments): string {
		const object = args.object as SendOtpRequest

		if (object.type === 'email')
			return 'Identifier must be a valid email address'
		if (object.type === 'phone')
			return 'Identifier must be a valid phone number'

		return 'Invalid identifier'
	}
}
