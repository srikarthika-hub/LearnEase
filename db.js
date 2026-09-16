const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.warn('[LearnEase DB] MONGODB_URI not configured in .env. Running in offline/graceful mode.');
    return;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 2500
    });
    isConnected = true;
    console.log(`[LearnEase DB] MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    isConnected = false;
    console.warn(`[LearnEase DB] MongoDB connection could not be established (${error.message}). Running in resilient offline mode.`);
  }
};

// Monitor connection state changes
mongoose.connection.on('connected', () => {
  isConnected = true;
  console.log('[LearnEase DB] Mongoose connection active.');
});

mongoose.connection.on('error', (err) => {
  isConnected = false;
  console.warn('[LearnEase DB] Mongoose connection warning:', err.message);
});

mongoose.connection.on('disconnected', () => {
  isConnected = false;
  console.warn('[LearnEase DB] Mongoose disconnected.');
});

const isDbConnected = () => {
  return mongoose.connection.readyState === 1;
};

module.exports = { connectDB, isDbConnected };
