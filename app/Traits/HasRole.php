<?php

namespace App\Traits;

use App\Models\Role;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

trait HasRole
{
    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class);
    }

    public function hasRole(): bool
    {
        return $this->roles()->count() >= 1 ? true : false;
    }

    public function hasAnyRoles(...$roles)
    {
        foreach ($roles as $role) {
            if (str($this->roles->pluck('name'))->containsAll($role)) {
                return true;
            }
        }

        return false;
    }

}
