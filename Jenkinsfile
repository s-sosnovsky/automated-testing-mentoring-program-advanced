pipeline {
    agent any

    environment {
        USER_LOGIN = credentials('test_user_default')
        USER_PASSWORD = credentials('test_user_default_password')
    }

    options {
        skipDefaultCheckout(false)
    }

    tools {
        nodejs 'nodejs'
    }

    stages {
        stage('clone from git') {
            steps {
                cleanWs()
                git branch: 'master',
          credentialsId: '4f4087e3-4400-48ce-8d7e-cde888eb1536',
          url: 'git@github.com:s-sosnovsky/automated-testing-mentoring-program-advanced.git'
            }
        }

        stage('sonarqube scan') {
            steps {
                script {
                    scannerHome = tool 'sonar-scanner'
                    withSonarQubeEnv('sonar') {
                        bat "${tool('sonar-scanner')}/bin/sonar-scanner -Dsonar.projectKey=automated-testing-mentoring-program-advanced"
                    }
                }
            }
        }

        stage('quality gate') {
            steps {
                script {
                    def qualitygate = waitForQualityGate()
                    sleep(10)
                    if (qualitygate.status != 'OK') {
                        waitForQualityGate abortPipeline: true
                    }
                }
            }
        }

        stage('build') {
            steps {
                script {
                    bat 'npm install'
                }
            }
        }

        stage('test') {
            steps {
                script {
                    bat 'npm test'
                }
            }
        }

        stage('allure-report') {
            steps {
                script {
                   allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
                }
            }
        }
    }
}
