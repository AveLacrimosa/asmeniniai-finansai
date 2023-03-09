const express = require('express');
const router = express.Router();

const {
    getAllFinances,
    setFinance,
    updateFinance,
    deleteFinance
} = require('../controllers/financeController');

const { protectAdmin } = require('../middleware/adminAuthMiddleware');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getAllFinances).post(protect, setFinance);
router.route('/:id').put(protect, updateFinance).delete(protect, deleteFinance);

module.exports = router;