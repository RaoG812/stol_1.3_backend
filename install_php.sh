#!/bin/bash

# Install PHP
apt-get update
apt-get install -y php

# Install necessary PHP extensions (if needed)
apt-get install -y php-curl php-json php-mbstring php-xml php-zip
