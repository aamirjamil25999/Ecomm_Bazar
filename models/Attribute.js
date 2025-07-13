const mongoose = require("mongoose");

const attributeSchema = new mongoose.Schema(
  {
    title: {
      type: Object,
      required: true,
    },
    name: {
      type: Object,
      required: true,
    },
    variants: [
      {
        name: {
          type: Object,
          required: false,
        },
        status: {
          type: String,
          lowercase: true,
          enum: ["show", "hide"],
          default: "show",
        },
      },
    ],
    option: {
      type: String,
      enum: ["Dropdown", "Radio", "Checkbox"],
    },
    type: {
      type: String,
      lowercase: true,
      default: "attribute",
      enum: ["attribute", "extra"],
    },
    status: {
      type: String,
      lowercase: true,
      enum: ["show", "hide"],
      default: "show",
    },
  },
  {
    timestamps: true,
  }
);

// module.exports = attributeSchema;

const Attribute = mongoose.model("Attribute", attributeSchema);

module.exports = Attribute;
