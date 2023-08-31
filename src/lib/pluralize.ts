const pluralize = (value: string, singular: string, plural: string): string => {
	return value === 1 ? singular : plural
}

export default pluralize
