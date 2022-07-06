const configurationInput = [
  {
    label: "Amount",
    name: "amount",
    textInputConfig: {
      keyboardType: "decimal-pad",
    },
  },
  {
    label: "Date",
    name: "date",
    textInputConfig: {
      placeholder: "YYYY-MM-DD",
      maxLength: 10,
    },
  },
  {
    label: "Description",
    name: "description",
    textInputConfig: {
      multiline: true,
      // autoCapitalize: "",
      // autoCorrect: false,
    },
  },
];

export default configurationInput;
