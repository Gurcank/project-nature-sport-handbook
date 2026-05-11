"use client";

import NotebookSpread, { type NotebookNote } from "./NotebookSpread";
import React from "react";

export type { NotebookNote };

export default function Handbook({
	leftNotes = [],
	rightNotes = [],
	size = "xl",
	className,
}: {
	leftNotes?: NotebookNote[];
	rightNotes?: NotebookNote[];
	size?: string;
	className?: string;
}) {
	return (
		<div className={className ?? "flex-1 mx-auto w-full max-w-[88rem] px-4 py-4 sm:py-5"}>
			<NotebookSpread leftNotes={leftNotes} rightNotes={rightNotes} size={size} />
		</div>
	);
}
