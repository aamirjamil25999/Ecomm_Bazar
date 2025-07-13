const Currencie= require('../models/Currency');
const { mongo_connection } = require('../config/db'); // CCDev

const addCurrency = async (req, res) => {
  try {
   
      const newCurrency = new Currencie(req.body);
      await newCurrency.save();
      res.send({
        message: 'Currency added successfully!',
      });
    } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const addAllCurrency = async (req, res) => {
  try {
    
      await Currencie.insertMany(req.body);
      res.send({ message: 'All Currencies added successfully!' });
    }  catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAllCurrency = async (req, res) => {
  try {
   
      const Currencies = await Currencie.find({});
      res.send(Currencies);
    } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getShowingCurrency = async (req, res) => {
  try {
   
      const currencies = await Currencie.find({ status: 'show' }).sort({
        _id: -1,
      });
      res.send(currencies);
    }  catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getCurrencyById = async (req, res) => {
  try {
    
      const currency = await Currencie.findById(req.params.id);
      res.send(currency);
    }  catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateCurrency = async (req, res) => {
  try {
    
      const currency = await Currencie.findById(req.params.id);

      if (currency) {
        currency.name = req.body.name;
        currency.symbol = req.body.symbol;
        currency.iso_code = req.body.iso_code;
        currency.exchange_rate = req.body.exchange_rate;
        currency.status = req.body.status;
        currency.live_exchange_rates = req.body.live_exchange_rates;
      }

      await currency.save();
      res.send({
        message: 'Currency update successfully!',
      });
    }  catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateManyCurrency = async (req, res) => {
  try {
  
      await Currencie.updateMany(
        { _id: { $in: req.body.ids } },
        {
          $set: {
            status: req.body.status,
            live_exchange_rates: req.body.live_exchange_rates,
          },
        },
        {
          multi: true,
        }
      );
    
    res.send({
      message: 'Currencies update successfully!',
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateEnabledStatus = async (req, res) => {
  try {

    const newStatus = req.body.status;

  
      await Currencie.updateOne(
        { _id: req.params.id },
        {
          $set: {
            status: req.body.status,
          },
        }
      );
      res.status(200).send({
        message: `Currencie ${
          newStatus === 'show' ? 'Published' : 'Un-Published'
        } Successfully!`,
      });
    } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateLiveExchangeRateStatus = async (req, res) => {
  try {
   
    const newStatus = req.body.live_exchange_rates;

      await Currencie.updateOne(
        { _id: req.params.id },
        {
          $set: {
            live_exchange_rates: req.body.live_exchange_rates,
          },
        }
      );
      res.status(200).send({
        message: `Currencie ${
          newStatus === 'show' ? 'Published' : 'Un-Published'
        } Successfully!`,
      });
    }  catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const deleteCurrency = async (req, res) => {
  try {
    
      await Currencie.deleteOne({ _id: req.params.id });
      res.send({
        message: 'Delete currency successfully!',
      });
    } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const deleteManyCurrency = async (req, res) => {
  try {
    
      await Currencie.deleteMany({ _id: req.body.ids });
      res.send({
        message: `currency Delete Successfully!`,
      });
    }  catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  addCurrency,
  addAllCurrency,
  getAllCurrency,
  getShowingCurrency,
  getCurrencyById,
  updateCurrency,
  updateManyCurrency,
  updateEnabledStatus,
  updateLiveExchangeRateStatus,
  deleteCurrency,
  deleteManyCurrency,
};
