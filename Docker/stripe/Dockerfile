FROM stripe/stripe-cli:latest

WORKDIR /app

# Copy the startup script and convert line endings
COPY start-webhook.sh .
RUN apt-get update && apt-get install -y dos2unix && dos2unix start-webhook.sh && chmod +x start-webhook.sh

# Check if the script exists
RUN ls -l ./start-webhook.sh  

# This will list the file to confirm it's there

# Set the entrypoint to our startup script
ENTRYPOINT ["./start-webhook.sh"]