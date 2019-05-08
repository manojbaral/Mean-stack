export const devConfig = {
  port: 3000,
  database: "invoice-builder",
  secret: "abc123",
  frontendURL:"http://localhost:4200",
  google: {
    clientId:'355941040171-3373l8cvimqh95m5dk6u677mk2s2hq64.apps.googleusercontent.com',
    clientSecret:'yqDFAT-SUug5oSVaxcCJiMcB',
    callbackURL:'http://localhost:3000/api/auth/google/callback',
  },
  github: {
    clientId:'a082bef839c077e415e6',
    //'a082bef839c077e415e6',
    clientSecret:'90f6e5bfcb2fff5e98fa87772072b12d9362ec64',
    //'27682817d8f1c5d76ff2232b8e9f65c704e7163e',
    callbackURL:'http://localhost:3000/api/auth/github/callback',
  },
  twitter: {
    consumerKey:'0kxfati43WdUqsR4clySCy5j0',
      //'Z7q23PqYS0YIScntOqkJLZMl8',
    consumerSecret: 'iGdF1SzAjvPiDgoVvfWQIptRfRvJ7ckMFpqYmozRC5tJMD8QqR',
      //'0EeSoZr2ws2rJNs2vn8uXnGbEiFSRbELM4Wf6uK1CQneomTkhO',
    callbackURL: 'http://localhost:3000/api/auth/twitter/callback',
  },

  bitbucket: {
    consumerKey:'FZ2ysD6U3stjfvzKzB',
    //'a082bef839c077e415e6',
    consumerSecret:'e45VEmc3AZB7nXajYdc7PmSCGPr7HTyG',
    //'27682817d8f1c5d76ff2232b8e9f65c704e7163e',
    callbackURL:'http://localhost:3000/api/auth/bitbucket/callback',
  },
  meetup:{
    consumerKey:'5h3qa4n4svaos6jcmnsg5rjk39',
    consumerSecret:'4ruv4go8iuuquuqli3ahk04gbj',
    callbackURL:'http://localhost:3000/api/auth/meetup/callback'

  },
  reddit:{
    clientId:'MNlkB17u1CBX7Q',
    //'a082bef839c077e415e6',
    clientSecret:'Ikhsy4DkHEJu2cvs1IKtnuum6x4',
    //'27682817d8f1c5d76ff2232b8e9f65c704e7163e',
    callbackURL:'http://localhost:3000/api/auth/reddit/callback',
  }
};
