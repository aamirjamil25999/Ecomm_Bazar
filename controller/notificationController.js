const Notification = require("../models/Notification");

const addNotification = async (req, res) => {
  try {
    if (req.body.productId) {
      const isAdded = await Notification.findOne({
        productId: req.body.productId,
      });
      if (isAdded) {
        return res.end();
      } else {
        const newNotification = new Notification(req.body);
        await newNotification.save();
        res.status(200).send({
          message: "Notification save successfully!",
        });
      }
    } else {
      const newNotification = new Notification(req.body);
      await newNotification.save();
      res.status(200).send({
        message: "Notification save successfully!",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAllNotification = async (req, res) => {
  try {
    const { page } = req.query;

    const pages = page;
    const limits = 5;
    const skip = (pages - 1) * limits;
    const totalDoc = await Notification.countDocuments();
    const totalUnreadDoc = await Notification.countDocuments({
      status: "unread",
    });
    const notifications = await Notification.find({
      status: { $in: ["read", "unread"] },
    })
      .sort({
        _id: -1,
      })
      .skip(skip)
      .limit(limits);

    res.send({ totalDoc, totalUnreadDoc, notifications });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateStatusNotification = async (req, res) => {
  try {
    const newStatus = req.body.status;

    await Notification.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          status: newStatus,
        },
      }
    );
    const totalDoc = await Notification.countDocuments({ status: "unread" });

    res.send({
      totalDoc,
      message: `Notification Read!`,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateManyStatusNotification = async (req, res) => {
  try {
    await Notification.updateMany(
      { _id: { $in: req.body.ids } },
      {
        $set: {
          status: req.body.status,
        },
      },
      {
        multi: true,
      }
    );

    res.send({
      message: "Notification update successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const deleteNotificationById = async (req, res) => {
  try {
    Notification.deleteOne({ _id: req.params.id }, (err) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.send({
          message: "Notification deleted successfully!",
        });
      }
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const deleteNotificationByProductId = async (req, res) => {
  try {
    Notification.deleteOne({ productId: req.params.id }, (err) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.send({
          message: "Notification deleted successfully!",
        });
      }
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const deleteManyNotification = async (req, res) => {
  try {
    await Notification.deleteMany({ _id: req.body.ids });

    res.send({
      message: `Notification Delete Successfully!`,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  getAllNotification,
  addNotification,
  updateStatusNotification,
  deleteNotificationById,
  deleteNotificationByProductId,
  updateManyStatusNotification,
  deleteManyNotification,
};
