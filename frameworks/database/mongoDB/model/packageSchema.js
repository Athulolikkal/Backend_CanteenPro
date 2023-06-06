import mongoose from "mongoose";
import canteenSchema from './canteenSchema.js'

const packageSchema = new mongoose.Schema({

    breakfast: {
        mainCourse: {
            type: [String],
            required: true,
        },
        sideCourse: {
            type: [String],
            required: true,
        },
        specials: {
            type: [String],
            required: true,
        },
        availableTime: {
            type: String,
            required: true,
        },
        ratePerDay: {
            type: Number,
            required: true
        },
        ratePerMonth: {
            type: Number,
            required: true
        },
    },
    lunch: {
        mainCourse: {
            type: [String],
            required: true,
        },
        sideCourse: {
            type: [String],
            required: true,
        },
        specials: {
            type: [String],
            required: true,
        },
        availableTime: {
            type: String,
            required: true,
        },
        ratePerDay: {
            type: Number,
            required: true
        },
        ratePerMonth: {
            type: Number,
            required: true
        },
    },
    dinner: {
        mainCourse: {
            type: [String],
            required: true,
        },
        sideCourse: {
            type: [String],
            required: true,
        },
        specials: {
            type: [String],
            required: true,
        },
        availableTime: {
            type: String,
            required: true,
        },
        ratePerDay: {
            type: Number,
            required: true
        },
        ratePerMonth: {
            type: Number,
            required: true
        }
    }, rating: {
        type: Number,
    },
    review: [String],
    canteenId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Canteens',
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    }
})
const model = mongoose.model('packages', packageSchema);
export default model;