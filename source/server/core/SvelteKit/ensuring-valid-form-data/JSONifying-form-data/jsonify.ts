import type {writeableJsonifiedFormData_} from "../writeable-JSONified-form-data/module.ts";
export function jsonifyFormData(
	formData: FormData,
): writeableJsonifiedFormData_.JsonifiedFormData {
	const jsonifiedFormData: writeableJsonifiedFormData_.JsonifiedFormData = {};
	const entries = formData.entries() satisfies FormDataIterator<
		readonly [string, FormDataEntryValue]
	>;
	for (const entry of entries) {
		const [key, value] = entry;
		const existingValue = jsonifiedFormData[key] satisfies
			undefined | writeableJsonifiedFormData_.entries_.Entries;
		if (existingValue === undefined) {
			jsonifiedFormData[key] = [value];
			continue;
		} else {
			existingValue.push(value);
			continue;
		}
	}
	return jsonifiedFormData;
}
