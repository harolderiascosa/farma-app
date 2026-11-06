# The following lines have been added by Docker Desktop to enable Docker CLI completions.
fpath=(/Users/macdeeduardo/.docker/completions $fpath)
autoload -Uz compinit
(( ${+_comps[docker]} )) || compinit
# End of Docker CLI completions
export PATH="$HOME/.local/bin:$PATH"
export PATH="$HOME/.local/bin:$PATH"
export PATH="$HOME/.local/bin:$PATH"

# >>> grok installer >>>
export PATH="$HOME/.grok/bin:$PATH"
fpath=(~/.grok/completions/zsh $fpath)
autoload -Uz compinit && compinit -C
# <<< grok installer <<<


# Added by Antigravity CLI installer
export PATH="/Users/macdeeduardo/.local/bin:$PATH"
