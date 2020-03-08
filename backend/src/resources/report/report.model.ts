import mongoose from 'mongoose'

const reportSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      trim: true,
      maxlength: 500
    },
    state: {
      type: String,
      required: true,
      enum: ['open', 'blocked', 'resolved'],
      default: 'open'
    },
    type: {
      type: String,
      required: true,
      enum: ['spam'],
      default: 'spam'
    }
  },
  { timestamps: true }
)

export const Report = mongoose.model('report', reportSchema)
