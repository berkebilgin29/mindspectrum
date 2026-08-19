import type { BaseOption, BaseQuestion, DimensionId } from "@/lib/types";

export const SKIP_INDEX = -1;

export function effectiveOptions(question: BaseQuestion): BaseOption[] {
  return [
    ...question.options,
    {
      text: "Emin değilim; bu ifade bana tam oturmuyor.",
      weights: { [question.dimension]: 1 } as Partial<Record<DimensionId, number>>,
    },
  ];
}
