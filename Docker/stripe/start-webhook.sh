#!/bin/sh

# Function to check if a required environment variable is set
check_env_var() {
    local var_name=$1
    local var_value=$(eval "echo \$$var_name")
    if [ -z "$var_value" ]; then
        echo "Error: $var_name is not set"
        exit 1
    fi
}

# Check required environment variables
check_env_var "STRIPE_SECRET_KEY"

# Start the Stripe webhook listener
echo "Starting Stripe webhook listener..."

exec stripe listen \
    --api-key "${STRIPE_SECRET_KEY}" \
    --forward-to http://host.docker.internal:3000/api/webhook/stripe \
    --skip-verify