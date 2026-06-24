pipeline {

    agent any

    environment {
        IMAGE = "satishbandi33/nodeai:v1"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/satishbandi201/NodeAI.git'
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t $IMAGE .'
            }
        }
        stage('Test') {
            steps {
                sh '''
                npm install
                npm test
                '''
            }
        }

        stage('Push') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-creds',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )
                ]) {

                    sh '''
                    echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                    docker push $IMAGE
                    '''
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker run -d \
                  --name nodeai \
                  -p 80:3000 \
                  $IMAGE
                '''
            }
        }
    }
}