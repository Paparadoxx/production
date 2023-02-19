import { classNames } from "./classNames";

describe ( "classNames", () => {
	test ("with only first param", () => {
		expect(classNames("someClass")).toBe("someClass");
	});

	test ("with additional class", () => {
		const expected = "someClass cls1 cls2";
		expect(classNames("someClass", {}, ["cls1", "cls2"])).toBe(expected);
	});

	test ("with mods", () => {
		const expected = "someClass cls1 cls2 hovered active";
		expect(classNames(
			"someClass",
			{hovered: true, active: true}, 
			["cls1", "cls2"]
		)).toBe(expected);
	});

	test ("with mods", () => {
		const expected = "someClass cls1 cls2 active";
		expect(classNames(
			"someClass",
			{hovered: false, active: true}, 
			["cls1", "cls2"]
		)).toBe(expected);
	});
});