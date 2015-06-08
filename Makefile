
# Color helpers
C_CYAN=\x1b[34;01m
C_RESET=\x1b[0m

# Group targets
all: deps lint jscs-check
ci: lint jscs-check

# Install dependencies
deps:
	@echo "$(C_CYAN)> installing dependencies$(C_RESET)"
	@npm install

# Lint JavaScript
lint:
	@echo "$(C_CYAN)> linting javascript$(C_RESET)"
	@./node_modules/.bin/jshint . --config .jshintrc

# Run JavaScript Code Style
jscs-check:
	@echo "$(C_CYAN)> checking javascript code style$(C_RESET)"
	@./node_modules/.bin/jscs . --config .jscsrc

# Fix JavaScript Code Style errors
jscs-fix:
	@echo "$(C_CYAN)> fixing javascript code style$(C_RESET)"
	@./node_modules/.bin/jscs . --config .jscsrc --fix

.PHONY: test
