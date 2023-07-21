import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  location: {
    type: String,
    required: [true, 'location is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  },
  min: {
    type: String,
    required: [true, 'Minimum customers is required.'],
  },
  max: {
    type: String,
    required: [true, 'Maximum customers is required.'],
  },
  avg: {
    type: String,
    required: [true, 'Average number of cookies is required.'],
  },
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;