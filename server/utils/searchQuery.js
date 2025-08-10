const searchQuery = (keyword, strictRegionMatch) => {
  if (!keyword) return {};
  const searchTerms = keyword
    .trim()
    .split(/\s+/)
    .filter((term) => term.length > 0);

  const locationFields = [
    "location.city",
    "location.region",
    "location.address",
  ];
  
  const serviceFields = ["services.name"];
  const fuelFields = ["fuel.type"];
  const queryConditions = [];

  for (const term of searchTerms) {
    const termRegex = new RegExp(term, "i");
    const exactRegex = new RegExp(`^${term}$`, "i");

    queryConditions.push({
      $or: [
        ...locationFields.map((field) => {
          const regex =
            strictRegionMatch && field === "location.region"
              ? exactRegex
              : termRegex;
          return { [field]: regex };
        }),
        ...serviceFields.map((field) => ({ [field]: termRegex })),
        ...fuelFields.map((field) => ({ [field]: termRegex })),
      ],
    });
  }
  return { $and: queryConditions };
};

export default searchQuery;
