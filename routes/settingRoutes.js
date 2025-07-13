const router = require("express").Router();

const {
  addGlobalSetting,
  getGlobalSetting,
  updateGlobalSetting,
  addStoreSetting,
  getStoreSetting,
  updateStoreSetting,
  getStoreSeoSetting,
  addStoreCustomizationSetting,
  getStoreCustomizationSetting,
  updateStoreCustomizationSetting,
} = require("../controller/settingController");

//add a global setting
router.post("/global/add", addGlobalSetting);

//get global setting
router.get("/global/all", getGlobalSetting);

//update global setting
router.put("/global/update", updateGlobalSetting);

//add a store setting
router.post("/store-setting/add", addStoreSetting);

//get store setting
router.get("/store-setting/all", getStoreSetting);

//get store setting
router.get("/store-setting/seo", getStoreSeoSetting);

//update store setting
router.put("/store-setting/update", updateStoreSetting);

//store customization routes

//add a online store customization setting
router.post("/store/customization/add", addStoreCustomizationSetting);

//get online store customization setting
router.get("/store/customization/all", getStoreCustomizationSetting);

//update online store customization setting
router.put("/store/customization/update", updateStoreCustomizationSetting);

module.exports = router;
