const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    setting: {},
  },
  {
    timestamps: true,
  }
);

// module.exports = settingSchema;

const Setting = mongoose.model("Setting", settingSchema);

module.exports = Setting;
