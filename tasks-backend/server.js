require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log(' MongoDB Connected'))
.catch((err) => console.error('MongoDB Error:', err));

// Routes
app.use('/api', taskRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
