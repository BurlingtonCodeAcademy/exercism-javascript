
# assignments
ASSIGNMENT ?= ""
IGNOREDIRS := "^(\.git|docs|bin|node_modules|.idea)$$"
ASSIGNMENTS = $(shell find ./exercises -maxdepth 1 -mindepth 1 -type d | cut -d'/' -f3 | sort | grep -Ev $(IGNOREDIRS))

# output directories
TMPDIR ?= "/tmp"
OUTDIR := $(shell mktemp -d "$(TMPDIR)/$(ASSIGNMENT).XXXXXXXXXX")

# language specific config (tweakable per language)
FILEEXT := "js"
ANSWER := "$(ASSIGNMENT).$(FILEEXT)"
SPOILER := "$(ASSIGNMENT).rot13.$(FILEEXT)"
TSTFILE := "$(subst _,-,$(ASSIGNMENT)).spec.$(FILEEXT)"

test-assignment:
	@echo "running tests for: $(ASSIGNMENT)"
	@cp big-integer.$(FILEEXT) $(OUTDIR)
	@cp exercises/$(ASSIGNMENT)/$(TSTFILE) $(OUTDIR)

	# if a plaintext solution exists, rot13 it
	# see https://stackoverflow.com/questions/5553352/how-do-i-check-if-file-exists-in-makefile
	if test -f exercises/$(ASSIGNMENT)/$(ANSWER); then tr 'A-Za-z' 'N-ZA-Mn-za-m' < exercises/$(ASSIGNMENT)/$(ASSIGNMENT).js > exercises/$(ASSIGNMENT)/$(SPOILER); fi

	# de-rot13 the solution before running it
	@tr 'A-Za-z' 'N-ZA-Mn-za-m' < exercises/$(ASSIGNMENT)/$(SPOILER) > $(OUTDIR)/$(ASSIGNMENT).$(FILEEXT)

	@jasmine --random=true $(OUTDIR)/$(TSTFILE)

test:
	@for assignment in $(ASSIGNMENTS); do ASSIGNMENT=$$assignment $(MAKE) -s test-assignment || exit 1; done
