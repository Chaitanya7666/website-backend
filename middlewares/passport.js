import config from 'config'
import logger from '../utils/logger'
const passport = require('passport')
const GitHubStrategy = require('passport-github2').Strategyc
// const logger = require('../utils/logger')

try {
  passport.use(new GitHubStrategy({
    clientID: config.get('githubOauth.clientId'),
    clientSecret: config.get('githubOauth.clientSecret'),
    callbackURL: `${config.get('services.rdsApi.baseUrl')}/auth/github/callback`
  }, (accessToken, refreshToken, profile, done) => {
    return done(null, accessToken, profile)
  }
  ))
} catch (err) {
  logger.error('Error initialising passport:', err)
}
