/*jshint node:true*/
module.exports = {
  scenarios: [
    {
      name: 'ember-1.12.2',
      bower: {
        dependencies: {
          'ember': '~1.12.2'
        },
        resolutions: {
          'ember': '~1.12.2'
        }
      }
    },
    {
      name: 'ember-1.13.13',
      bower: {
        dependencies: {
          'ember': '~1.13.13'
        },
        resolutions: {
          'ember': '~1.13.13'
        }
      }
    },
    {
      name: 'ember-release',
      bower: {
        dependencies: {
          'ember': 'components/ember#release'
        },
        resolutions: {
          'ember': 'release'
        }
      }
    },
    {
      name: 'ember-beta',
      bower: {
        dependencies: {
          'ember': 'components/ember#beta'
        },
        resolutions: {
          'ember': 'beta'
        }
      }
    },
    {
      name: 'ember-canary',
      bower: {
        dependencies: {
          'ember': 'components/ember#canary'
        },
        resolutions: {
          'ember': 'canary'
        }
      }
    }
  ]
};
