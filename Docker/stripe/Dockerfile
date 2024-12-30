# Use a Debian-based image
FROM debian:bullseye-slim

# Install necessary packages
# Refer to https://github.com/stripe/stripe-cli/
RUN apt-get update && apt-get install -y curl && \
    curl -sL https://github.com/stripe/stripe-cli/releases/download/v1.7.8/stripe_1.7.8_linux_x86_64.tar.gz | tar xz -C /usr/local/bin

#Set the working directory
WORKDIR /app

# Copy the script and ensure it is executable
COPY start-webhook.sh .
RUN chmod +x start-webhook.sh

# Run the script
CMD ["./start-webhook.sh"]