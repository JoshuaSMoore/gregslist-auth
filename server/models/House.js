import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const HouseSchema = new Schema(
  {
    bedrooms: { type: Number, required: true },
    year: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    levels: { type: Number, required: true },
    imgUrl: { type: String, default: 'https://dchba.org/wp-content/uploads/2020/06/house-placeholder.png' },
    price: { type: Number, required: true, min: 100000 },
    description: { type: String, required: true },

    creatorId: {
      type: Schema.Types.ObjectId,
      ref: 'Account',
      required: true
    }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

HouseSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})
